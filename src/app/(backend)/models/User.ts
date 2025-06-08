import { Schema, model, models } from "mongoose";

const userModel = new Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      require: false,
    },
    phone: {
      type: String,
      require: false,
    },
    ip_address: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    token: {
      type: String,
      require: true,
    },
    created_at: {
      type: String,
      require: false,
    },
  },
  {
    collection: "fa_users",
  }
);

// Add indexes for performance
userModel.index({ username: "text" });

// Virtuals (computed properties)
// userModel.virtual("formattedPrice").get(function () {
//   return `$${this.price.toFixed(2)}`;
// });

// Middleware

userModel.pre("save", function (next) {
  console.log("Saving user: ", this.username);
  next();
});

// Use models.User if it exists, otherwise create a new model
export default models.User || model("User", userModel);
