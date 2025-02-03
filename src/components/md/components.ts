import H1 from "./H1.astro";
import H2 from "./H2.astro";
import H3 from "./H3.astro";
import H4 from "./H4.astro";
import H5 from "./H5.astro";
import H6 from "./H6.astro";
import Paragraph from "./Paragraph.astro";
import Blockquote from "./Blockquote.astro";
import Em from "./Em.astro";
import Strong from "./Strong.astro";
import OrderedList from "./OrderedList.astro";
import UnorderedList from "./UnorderedList.astro";
import ListItem from "./ListItem.astro";

const mdComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  em: Em,
  strong: Strong,
  blockquote: Blockquote,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListItem,
};

export default mdComponents;