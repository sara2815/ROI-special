import { useState } from "react";
import type { OpenWhenItem } from "../data/messages";

interface Props {
  item: OpenWhenItem;
}

export default function OpenWhenCard({ item }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="card" onClick={() => setOpen(true)}>
      {!open ? (
        <>
          <span className="emoji">{item.emoji}</span>
          <p>{item.title}</p>
        </>
      ) : (
        <p className="message">{item.message}</p>
      )}
    </div>
  );
}
