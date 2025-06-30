import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";

// Lazy load components
const NotFound = lazy(() => import("@/pages/not-found"));
const Home = lazy(() => import("@/pages/home"));
const Landing = lazy(() => import("@/pages/test/eto_egen/landing"));
const GenderSelect = lazy(() => import("@/pages/test/eto_egen/gender-select"));
const Quiz = lazy(() => import("@/pages/test/eto_egen/quiz"));
const Result = lazy(() => import("@/pages/test/eto_egen/result"));
const TestList = lazy(() => import("@/pages/test/test-list"));
const YoutubeList = lazy(() => import("@/pages/youtube/youtube-list"));
const NewsList = lazy(() => import("@/pages/news/news-list"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/personality-test" component={Landing} />
        <Route path="/gender-select" component={GenderSelect} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/result" component={Result} />
        <Route path="/test-list" component={TestList} />
        <Route path="/youtube-list" component={YoutubeList} />
        <Route path="/news-list" component={NewsList} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
