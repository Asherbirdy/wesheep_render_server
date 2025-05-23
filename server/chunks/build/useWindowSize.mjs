import { u as useWindowSize$1 } from './index.mjs';
import { computed } from 'vue';

const useWindowSize = () => {
  const { width } = useWindowSize$1();
  const mdWidth = 768;
  const lgWidth = 1024;
  const isMdSize = computed(() => width.value < mdWidth);
  const isLgSize = computed(() => width.value < lgWidth);
  return { isMdSize, isLgSize };
};

export { useWindowSize as u };
//# sourceMappingURL=useWindowSize.mjs.map
