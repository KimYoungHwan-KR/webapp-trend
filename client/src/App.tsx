import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Landing from "@/pages/test/eto_egen/landing";
import GenderSelect from "@/pages/test/eto_egen/gender-select";
import Quiz from "@/pages/test/eto_egen/quiz";
import Result from "@/pages/test/eto_egen/result";
import TestList from "@/pages/test/test-list";
import YoutubeList from "@/pages/youtube/youtube-list";
import NewsList from "@/pages/news/news-list";

function Router() {
  return (
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
