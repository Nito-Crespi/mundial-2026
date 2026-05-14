import { flagUrl } from '../utils/helpers';

interface FlagProps {
  code: string;
  size?: 'sm' | 'md' | 'lg';
  alt?: string;
}

export function Flag({ code, size = 'md', alt }: FlagProps) {
  const cls =
    size === 'sm' ? 'flag flag-sm' : size === 'lg' ? 'flag flag-lg' : 'flag';
  const cdnSize = size === 'sm' ? 'w20' : size === 'lg' ? 'w80' : 'w40';
  return <img className={cls} src={flagUrl(code, cdnSize)} alt={alt || code} />;
}
