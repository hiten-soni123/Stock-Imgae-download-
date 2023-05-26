

import { createApi } from "unsplash-js";
const APP_ACCESS_KEY = process.env.APP_ACCESS_KEY;
export const api = createApi({ accessKey: APP_ACCESS_KEY });
