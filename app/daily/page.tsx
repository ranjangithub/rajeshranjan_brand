import { redirect } from "next/navigation";
import { getAllDailyBriefings } from "@/lib/content";

export default function DailyIndexPage() {
  const briefings = getAllDailyBriefings();
  if (briefings.length === 0) {
    redirect("/");
  }
  redirect(`/daily/${briefings[0].slug}`);
}
