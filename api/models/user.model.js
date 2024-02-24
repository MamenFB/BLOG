import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
<<<<<<< HEAD
        '../../client/src/assets/logo3.png',
=======
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
>>>>>>> 9d936d4dd17a502233f4769ffe6e264c39686727
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },

   {timestamps: true}

);

const User = mongoose.model('User', userSchema);

export default User;
