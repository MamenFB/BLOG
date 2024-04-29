import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Comment from '../api/models/comment.model';

describe('Comment Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should create & save a comment successfully', async () => {
    const commentData = { content: 'Test comment', postId: '12345', userId: 'user1' };
    const validComment = new Comment(commentData);
    const savedComment = await validComment.save();

    // Verifying the content
    expect(savedComment._id).toBeDefined();
    expect(savedComment.content).toBe(commentData.content);
    expect(savedComment.postId).toBe(commentData.postId);
    expect(savedComment.userId).toBe(commentData.userId);
    expect(savedComment.likes).toEqual([]);
    expect(savedComment.numberOfLikes).toBe(0);
  });

  it('should fail to create a comment without required fields', async () => {
    const invalidComment = new Comment({ content: 'Missing postId and userId' });
    let err;
    try {
      await invalidComment.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.postId).toBeDefined();
    expect(err.errors.userId).toBeDefined();
  });

  
});

