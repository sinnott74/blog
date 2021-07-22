export const scrollTo = (el?: HTMLElement | null) => {
    if (!el) {
        return;
    }
    const { x, y } = el.getBoundingClientRect();
    window.scrollTo(x, y);
};
