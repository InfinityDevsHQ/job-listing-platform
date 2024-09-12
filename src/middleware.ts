import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getUserProfile } from './lib/user';

const protectedRoutes = ['/candidates', '/company', '/inbox', '/onboarding', '/profile'];

export default async function middleware(req: NextRequest) {
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    const userProfile = await getUserProfile();

    const isAuthenticated = Object.keys(userProfile).length && userProfile.user_data.id;
    // first check if user is not logged in by checking their id exist or not
    // if (!isAuthenticated) {
    //   const absoluteURL = new URL('/login', req.nextUrl.origin);
    //   return NextResponse.redirect(absoluteURL.toString());
    // }

    if (
      isAuthenticated &&
      !userProfile.user_data.is_onboarded &&
      !req.nextUrl.pathname.includes('onboarding')
    ) {
      // if user is logged in but onboarding is not complete
      const absoluteURL = new URL('/onboarding', req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }

    if (
      isAuthenticated &&
      userProfile.user_data.is_onboarded &&
      req.nextUrl.pathname.includes('onboarding')
    ) {
      const absoluteURL = new URL('/profile', req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
  }
}
