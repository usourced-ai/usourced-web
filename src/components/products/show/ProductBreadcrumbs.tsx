import Link from "next/link";

type Breadcrumb = {
  id: string;
  name: string;
  href: string;
};

function CurrentBreadcrumbItem({ breadcrumb }: { breadcrumb: Breadcrumb }) {
  return (
    <li key={breadcrumb.id} className="text-sm">
      <Link
        href={breadcrumb.href}
        aria-current="page"
        className="font-medium text-gray-500 hover:text-gray-600"
      >
        {breadcrumb.name}
      </Link>
    </li>
  );
}

function BreadcrumbItem({ breadcrumb }: { breadcrumb: Breadcrumb }) {
  return (
    <li key={breadcrumb.id}>
      <div className="flex items-center">
        <a
          href={breadcrumb.href}
          className="mr-4 text-sm font-medium text-gray-900"
        >
          {breadcrumb.name}
        </a>
        <svg
          viewBox="0 0 6 20"
          aria-hidden="true"
          className="h-5 w-auto text-gray-300"
        >
          <path
            d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
            fill="currentColor"
          />
        </svg>
      </div>
    </li>
  );
}

export function ProductBreadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <ol className="flex items-center space-x-4">
        {breadcrumbs.map((breadcrumb, i) =>
          i === breadcrumbs.length - 1 ? (
            <CurrentBreadcrumbItem
              key={breadcrumb.id}
              breadcrumb={breadcrumb}
            />
          ) : (
            <BreadcrumbItem key={breadcrumb.id} breadcrumb={breadcrumb} />
          )
        )}
      </ol>
    </nav>
  );
}
