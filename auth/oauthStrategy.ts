import passport from 'passport';
import { Strategy as GoogleStrategy, Profile, VerifyCallback } from 'passport-google-oauth20';
import User from '../models/User';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const CALLBACK_URL = '/auth/google/callback';

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: CALLBACK_URL,
},
async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
  try {
    // Find or create user in the database based on Google profile
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
      user = new User({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails && profile.emails[0].value,
        profile_img: profile.photos && profile.photos[0].value,
      });
      await user.save();
    }
    return done(null, user);
  } catch (err) {
    return done(err, undefined);
  }
}));

// Serialize user to session
passport.serializeUser((user: Express.User, done: (err: any, id?: any) => void) => {
  done(null, (user as any).id);
});

// Deserialize user from session
passport.deserializeUser(async (id: string, done: (err: any, user?: Express.User | null) => void) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
