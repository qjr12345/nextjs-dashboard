// 使用中间件执行此任务的优势在于，在中间件验证身份验证之前，受保护的路由甚至不会开始呈现，从而增强了应用程序的安全性和性能。

import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;


//运行在指定的路径上
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.png).*)"],
};
