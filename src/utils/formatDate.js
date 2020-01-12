import { format, parseISO } from "date-fns/esm"

export const getDateInEnglish = ISODate => format(parseISO(ISODate), "PPP")
