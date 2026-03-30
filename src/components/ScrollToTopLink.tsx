import { Link, type LinkProps } from 'react-router-dom';

interface ScrollToTopLinkProps extends LinkProps {
  children: React.ReactNode;
}

// Composant Link qui scroll automatiquement en haut de page
export const ScrollToTopLink = ({ children, ...props }: ScrollToTopLinkProps) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
