"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";


export default function ReactQueryProvider({ children }: PropsWithChildren) {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                    },
                },
            })
    );
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}