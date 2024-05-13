import { Routes } from "@/@types/routes";
import { lazy } from "react";

const homeRoute: Routes = [
    {
        key: "homePage",
        path: '/home-page',
        component: lazy(() => import('@/views/home/pages/Homepage')),
        authority: [],
        meta: {
            pageContainerType: 'gutterless',
            layout: 'blank',
            footer: false
        }
    }
]

export default homeRoute;