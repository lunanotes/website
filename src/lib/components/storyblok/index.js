import Grid from './Grid.svelte'
import Feature from './Feature.svelte'
import Page from './Page.svelte'
import NotFound from './404.svelte'
import CallToAction from "./CallToAction.svelte";
import Button from "./Button.svelte";
import Title from "./Title.svelte";
import Handwrite from "./Handwrite.svelte";
import Paragraph from "./Paragraph.svelte";
import Pricing from "../Pricing/Pricing.svelte";
import PricingPlan from "../Pricing/PricingPlan.svelte";
import PricingPlanItem from "../Pricing/PricingPlanItem.svelte";
import Testimonial from "./Testimonial.svelte";
import Hero from "../Hero.svelte"

const Components = {
  Grid,
  Feature,
  Page,
  CallToAction,
  Hero,
  Button,
  Handwrite,
  Title,
  Testimonial,
  Paragraph,
  Pricing,
  PricingPlan,
  PricingPlanItem
}

export default component => {
  // component does exist
  if (typeof Components[component] !== "undefined") {
    return Components[component]
  }

  return NotFound
}