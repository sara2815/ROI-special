export interface OpenWhenItem {
  id: number;
  title: string;
  message: string;
  emoji: string;
  audio?: string;
}

export const openWhens: OpenWhenItem[] = [
  {
    id: 1,
    title: "Open when you miss me",
    message: "I wish I could teleport and hug you right now 🫶",
    emoji: "💖",
    audio: "/audio/missme.mp3",
  },
  {
    id: 2,
    title: "Open when your code breaks",
    message: "Even the best models need retraining. You’ve got this 🧠✨",
    emoji: "💻",
  },
  {
    id: 3,
    title: "Open when you're thinking about AI",
    message: "I love how your brain works. You + AI = my favorite combo 🤖💙",
    emoji: "🧠",
  },
];
