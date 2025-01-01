'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type TNavItemProps = React.HTMLAttributes<typeof Link> & {
  path: string;
  name: string;
  className?: string;
  Icon?: ({ active }: { active: boolean }) => JSX.Element;
};

const HomeNavItem = ({ path, name, className, Icon }: TNavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link href={path}>
      <div
        className={`relative w-fit whitespace-nowrap text-lg transition-all duration-150 before:absolute before:bottom-0 before:left-0 before:hidden before:w-full before:rounded-t-lg before:bg-astronautBlue before:transition-all before:duration-150 before:content-[''] hover:text-black hover:before:h-[5px] lg:py-5 lg:text-xs lg:before:block ${
          isActive
            ? 'font-medium text-black before:h-[3px]'
            : 'font-book text-typeGray font-light before:h-0'
        } ${className} `}
      >
        {Icon && <Icon active={isActive} />}
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default HomeNavItem;
