- [Layouts vs Templates](#layouts-vs-templates)
    - [Opt for layouts to:](#opt-for-layouts-to)
    - [Choose templates when you need:](#choose-templates-when-you-need)
- [New topic](#new-topic)

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
## New topic