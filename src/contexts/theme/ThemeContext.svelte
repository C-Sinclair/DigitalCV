<script>
  import { setContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import { themes } from "./themes";

  let _current = themes.find((theme) => theme.default).name;

  const getTheme = (name) => themes.find((theme) => theme.name === name);

  const Theme = writable(getTheme(_current));

  setContext("theme", {
    theme: Theme,
    toggle: () => {
      let _currentIndex = themes.findIndex(({ name }) => name === _current);
      _current =
        themes[_currentIndex === themes.length - 1 ? 0 : (_currentIndex += 1)]
          .name;
      Theme.update((theme) => ({ ...theme, ...getTheme(_current) }));
      setCssVars(getTheme(_current));
    },
  });

  onMount(() => {
    setCssVars(getTheme(_current));
  });

  const setCssVars = (theme) => {
    Object.entries(theme.colours).forEach(([prop, colour]) => {
      document.documentElement.style.setProperty(`--theme-${prop}`, colour);
    });
    document.documentElement.style.setProperty("--theme-name", theme.name);
  };
</script>

<slot />
