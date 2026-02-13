import { useState } from "react";
import type { OpenWhenItem } from "../data/messages";

interface Props {
  item: OpenWhenItem;
}

export default function OpenWhenCard({ item }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={`card ${open ? "open" : ""}`}
      onClick={() => setOpen((prev) => !prev)}

    >
      {!open ? (
        <div className="card-front">
          <span className="emoji">{item.emoji}</span>
          <p>{item.title}</p>
        </div>
      ) : (
        <div className="card-back">
          <p>{item.message}</p>

          {item.audio && (
            <audio controls autoPlay>
              <source src={item.audio} type="audio/mp3" />
            </audio>
          )}
        </div>
      )}
    </div>
  );
}
