import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "./Link";

interface SearchItem {
  title: string;
  type: string;
  href: string;
  summary: string;
}

export function SearchOverlay({ isOpen, onClose, items }: { isOpen: boolean; onClose: () => void; items: SearchItem[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items.slice(0, 6);
    return items.filter((item) => `${item.title} ${item.type} ${item.summary}`.toLowerCase().includes(normalized));
  }, [items, query]);

  if (!isOpen) return null;

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Website search">
      <div className="search-panel">
        <button className="icon-button search-close" onClick={onClose} aria-label="Close search" title="Close">
          <X size={20} />
        </button>
        <label className="search-box">
          <Search size={20} />
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search events, articles, gallery, publications..." />
        </label>
        <div className="search-results">
          {results.length ? results.map((item) => (
            <Link href={item.href} key={`${item.type}-${item.title}`} onClick={onClose} className="search-result">
              <span>{item.type}</span>
              <strong>{item.title}</strong>
              <p>{item.summary}</p>
            </Link>
          )) : <p className="empty-state">No matching content yet. Add more records in the data files.</p>}
        </div>
      </div>
    </div>
  );
}
