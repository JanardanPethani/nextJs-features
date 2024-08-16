- [Layouts vs Templates](#layouts-vs-templates)
    - [Opt for layouts to:](#opt-for-layouts-to)
    - [Choose templates when you need:](#choose-templates-when-you-need)
- [Point for Routing](#point-for-routing)
    - [Nested Dynamic Routes:](#nested-dynamic-routes)
    - [Catch-All Segments:](#catch-all-segments)
    - [Project Organization:](#project-organization)

## Layouts vs Templates

#### Opt for layouts to:
- Ensure consistency. Use layouts to provide a uniform appearance and behavior across your application. They are ideal for common elements like headers and footers.
- Maintain state. Layouts are beneficial for their ability to hold state and behaviors that should be persistent during navigation, such as user login status.
- Boost performance. They minimize re-renders and streamline state management, which can lead to performance improvements.

#### Choose templates when you need:

- Isolation. Templates are useful when components should not share state or behaviors, as they re-mount and re-render upon navigation.
Behavioral flexibility. If you need to trigger certain effects or state changes every time a user navigates to a component, templates provide this capability. For instance, they're suitable for:
- Tracking page views with useEffect.
- Collecting feedback with a useState managed form that's unique to each page.
- To alter default behaviors. Templates can modify how certain features work within your framework. For example, they can control the display of fallback UIs in Suspense Boundaries during page transitions, which layouts cannot do.

[Blog: Layouts vs Templates](https://www.builder.io/blog/nextjs-14-layouts-templates) 

----------
## Point for Routing

#### Nested Dynamic Routes:
- Allows multiple dynamic segments.
Example: 
```sh
 /products/[productId]/reviews/[reviewId] → src/app/products/[productId]/reviews/[reviewId]/page.tsx 
```

```js
export default function ReviewPage({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
```

#### Catch-All Segments:

- Handle multiple route segments with a single file.
Example:
```sh 
/docs/[...slug] → src/app/docs/[...slug]/page.tsx
```
```js
export default function Doc({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      {params.slug.length === 0 ? (
        <h1>Docs home page</h1>
      ) : (
        <h1>Viewing docs for {params.slug.join(' / ')}</h1>
      )}
    </div>
  );
}
```
- Match URLs like /docs/routing/catch-all-segments.

#### Project Organization:

- File Colocation: Routes are public only when a page.tsx file is present in the folder.
- Private Folders: Prefix folder names with an underscore (_) to make them unroutable.
- Route Groups: Organize routes without affecting URLs by wrapping folders in parentheses, e.g., (auth)/login/page.tsx -> localhost:3000/login, .

[Blog: Routing](https://www.builder.io/blog/next-14-app-router) 
