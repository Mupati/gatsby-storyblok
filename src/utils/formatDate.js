import { format, parseISO } from "date-fns/esm"

export const getDateInEnglish = ISODate =>
  format((ISODate && parseISO(ISODate)) || new Date(), "PPP") // new Date() makes up for the undefined value that is passed to the storyblok editor
