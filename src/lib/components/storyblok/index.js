import Grid from './Grid.svelte'
import Teaser from './Teaser.svelte'
import Feature from './Feature.svelte'
import Page from './Page.svelte'
import NotFound from './404.svelte'
import CallToAction from "./CallToAction.svelte";
import Button from "./Button.svelte";
import Title from "./Title.svelte";
import Handwrite from "./Handwrite.svelte";
import Paragraph from "./Paragraph.svelte";
import Testimonial from "./Testimonial.svelte";
import Hero from "../Hero.svelte"

const Components = {
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  page: Page,
  call_to_action: CallToAction,
  Hero,
  Button,
  Handwrite,
  Title,
  Testimonial,
  Paragraph
}

export default component => {
  // component does exist
  if (typeof Components[component] !== "undefined") {
    return Components[component]
  }

  return NotFound
}