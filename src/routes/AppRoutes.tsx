import { createBrowserRouter, Navigate, Outlet } from "react-router";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import LandingPageNotFound from "@/landing/PageNotFound";
import { _router } from "./_router";
import AdminLayout from "@/layouts/AdminDashboardLayout";
import AdminAuthLayout from "@/layouts/AdminAuthLayout";
import AdminLogin from "@/admin/auth/AdminLogin";
import AdminForgotPassword from "@/admin/auth/AdminForgotPassword";
import AdminResetPassword from "@/admin/auth/AdminResetPassword";
import Dashboard from "@/admin/dashboard/pages/Dashboard/Dashboard";
import Debate from "@/admin/dashboard/pages/Debate/Debate";
import DebateAddEdit from "@/admin/dashboard/pages/Debate/DebateAddEdit";
import Users from "@/admin/dashboard/pages/Users/Users";
import DebateCategory from "@/admin/dashboard/pages/DebateCategory/DebateCategory";
import Ticket from "@/admin/dashboard/pages/Tickets/Ticket";
import Moderators from "@/admin/dashboard/pages/Moderators/Moderators";
import Payouts from "@/admin/dashboard/pages/Payouts/Payouts";
import ProfitSharing from "@/admin/dashboard/pages/ProfitSharing/ProfitSharing";
import Subscription from "@/admin/dashboard/pages/Subscription/Subscription";
import PageNotFound from "@/admin/dashboard/pages/error/PageNotFound";
import SubscriptionHistory from "../admin/dashboard/pages/Subscription/SubscriptionHistory";
import AddSubscriber from "@/admin/dashboard/pages/Subscription/AddSubscriber";
import UserDetails from "../admin/dashboard/pages/Users/UserDetails";
import Setting from "../admin/dashboard/pages/Settings/Setting";
import ModeratorDetails from "@/admin/dashboard/pages/Moderators/ModeratorDetails";
import Admin from "@/admin/dashboard/pages/Admin/Admin";
import PayoutDetails from "@/admin/dashboard/pages/Payouts/PayoutDetails";

export const appRouter = createBrowserRouter([
	{
		element: (
			<LandingPageLayout>
				<Outlet />
			</LandingPageLayout>
		),
		children: [
			{
				index: true,
				element: <div>Landing Page</div>,
			},
			{
				path: "*",
				element: <LandingPageNotFound />,
			},
		],
	},
	{
		path: _router.admin.auth.index,
		element: <AdminAuthLayout />,
		children: [
			{
				index: true,
				element: <Navigate to={_router.admin.auth.login} replace />,
			},
			{
				path: _router.admin.auth.login,
				element: <AdminLogin />,
			},
			{
				path: _router.admin.auth.forgotpassword,
				element: <AdminForgotPassword />,
			},
			{
				path: _router.admin.auth.resetpassword,
				element: <AdminResetPassword />,
			},
		],
	},

	{
		path: _router.admin.dashboard.index,
		element: <AdminLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: _router.admin.dashboard.debate,
				element: <Debate />,
			},
			{
				path: _router.admin.dashboard.debateAdd,
				element: <DebateAddEdit />,
			},
			{
				path: _router.admin.dashboard.debateEdit,
				element: <DebateAddEdit />,
			},
			{
				path: _router.admin.dashboard.users,
				element: <Users />,
			},
			{
				path: _router.admin.dashboard.userDetails,
				element: <UserDetails />,
			},
			{
				path: _router.admin.dashboard.admin,
				element: <Admin/>
			},
			{
				path: _router.admin.dashboard.debateCategory,
				element: <DebateCategory />,
			},
			{
				path: _router.admin.dashboard.ticket,
				element: <Ticket />,
			},
			{
				path: _router.admin.dashboard.moderators,
				element: <Moderators />,
			},
			{
				path: _router.admin.dashboard.moderatorDetails,
				element: <ModeratorDetails/>,
			},
			{
				path: _router.admin.dashboard.subscriptions,
				element: <Subscription />,
			},
			{
				path: _router.admin.dashboard.addSubscriber,
				element: <AddSubscriber />,
			},
			{
				path: _router.admin.dashboard.subscriptionHistory,
				element: <SubscriptionHistory />,
			},
			{
				path: _router.admin.dashboard.payouts,
				element: <Payouts />,
			},
			{
				path: _router.admin.dashboard.payoutDetails,
				element: <PayoutDetails />,
			},
			{
				path: _router.admin.dashboard.profitSharing,
				element: <ProfitSharing />,
			},
			{
				path: _router.admin.dashboard.settings,
				element: <Setting />,
			},
			{
				path: "*",
				element: <PageNotFound />,
			},
		],
	},
]);
