import User from "./db/models/user.model";

export async function findOrCreateUser(profile: any) {
  let user = await User.findOne({ email: profile.email });

  if (!user) {
    user = await User.create({
      email: profile.email,
      name: profile.name,
      image: profile.image,
    });
  }

  return user;
}
