import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";

// Lazy load components
const NotFound = lazy(() => import("@/pages/not-found"));
const Home = lazy(() => import("@/pages/home"));
const TestList = lazy(() => import("@/pages/test/test-list"));
const YoutubeList = lazy(() => import("@/pages/youtube/youtube-list"));
const NewsList = lazy(() => import("@/pages/news/news-list"));
const Description = lazy(() => import("@/pages/test/eto_egen/description"));
const GenderSelect = lazy(() => import("@/pages/test/eto_egen/gender-select"));
const Quiz = lazy(() => import("@/pages/test/eto_egen/quiz"));
const Result = lazy(() => import("@/pages/test/eto_egen/result"));

// Loading component
const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 min-w-0 overflow-visible">
    <span
      className="inline-block w-auto whitespace-nowrap text-center text-4xl md:text-6xl font-bold mb-8 pb-36 leading-normal bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent animate-gradient-move"
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        opacity: 0.99,
        textShadow: "0 1px 1px rgba(0,0,0,0.01)"
      }}
    >
      Trendy Topic
    </span>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/test-list" component={TestList} />
        <Route path="/youtube-list" component={YoutubeList} />
        <Route path="/news-list" component={NewsList} />
        <Route path="/test/eto-egen/description" component={Description} />
        <Route path="/test/eto-egen/gender-select" component={GenderSelect} />
        <Route path="/test/eto-egen/quiz" component={Quiz} />
        <Route path="/test/eto-egen/result" component={Result} />
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
