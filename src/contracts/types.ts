import { ReactElement, ReactNode } from "react";

import { NextPage } from "next";
import type { AppProps } from "next/app";
import type { SWRResponse } from "swr";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};
export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export type SWR<P = {}, IP = P> = SWRResponse<P, IP>;

export type Auth = {
	user: object;
	error?: object;
	isLoading: boolean;
};
