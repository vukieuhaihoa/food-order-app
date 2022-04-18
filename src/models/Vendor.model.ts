import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

interface IVendor {
  name: string;
  ownerName: string;
  foodType: [string];
  pincode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  salt: string;
  serviceAvailable: boolean;
  coverImage: [string];
  rating: number;
  foods: [string];
}

export interface IVendorModel extends IVendor, Document {}

const vendorSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Enter your name of the vendor.'],
    },
    ownerName: {
      type: String,
      required: [true, 'Enter owner name of the vendor.'],
    },
    foodType: {
      type: [String],
    },
    pincode: {
      type: String,
      required: [true, 'Enter the pin code.'],
    },
    address: {
      type: String,
      required: [true, 'Enter the address of the vendor'],
    },
    phone: {
      type: String,
      required: [true, 'Enter the phone number of the vendor'],
    },
    email: {
      type: String,
      unique: [true, 'That username is taken.'],
      required: [true, 'Enter the email of the vendor.'],
      validate: [validator.isEmail, 'Enter a valid email address.'],
    },
    password: {
      type: String,
      required: [true, 'Enter the password.'],
    },
    salt: {
      type: String,
    },
    serviceAvailable: {
      type: Boolean,
    },
    coverImage: {
      type: [String],
    },
    rating: {
      type: Number,
      default: 0,
    },
    foods: {
      type: Schema.Types.ObjectId,
      ref: 'food',
    },
  },
  {
    timestamps: true, // auto create 2 filed : created_at, updated_at
  }
);

vendorSchema.pre('save', async function callBack(this: IVendorModel, next) {
  try {
    const self = this;
    const SALT_FACTOR = 10;
    if (!self.isModified('password')) next();
    self.salt = await bcrypt.genSalt(SALT_FACTOR);
    self.password = await bcrypt.hash(self.password, self.salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

const Vendor: Model<IVendorModel> = mongoose.model<IVendorModel>(
  'vendor',
  vendorSchema
);

export { Vendor };
