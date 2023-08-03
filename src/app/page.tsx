import HomeSection from "@/app/_components/home-banner";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.css";
import List from "@/components/list";

export default function Home() {
  return (
    <main>
      <HomeSection>
        <div className="h-screen flex items-center justify-around">
          <div>
            <h1 className={twMerge("text-7xl text-white", styles.typewriter)}>
              Igor Bueno
            </h1>
          </div>

          <List>
            <List.Item>About me</List.Item>
            <List.Item>Skills</List.Item>
            <List.Item>Professional projects</List.Item>
            <List.Item>Personal Projects</List.Item>
            <List.Item>Contact</List.Item>
          </List>
        </div>
      </HomeSection>
    </main>
  );
}
