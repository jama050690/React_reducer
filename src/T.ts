import type { Translations } from "./types"

export const T: Translations = {
	en: {
		copyright: "All rights reserved.",
		inputPlaceholder: "Type task name",
		buttonAdd: "Add",
		promotionText: ( countOfPrizes: number ) => `Win one of ${ countOfPrizes } prizes.`,
	},
	uz: {
		copyright: "Barcha huquqlar himoyalangan.",
		inputPlaceholder: "Topshiriq nomini kiriting",
		buttonAdd: "Qo'shish",
		promotionText: ( countOfPrizes: number ) => `${ countOfPrizes } ta yutuqdan birini yutib oling.`,
	},
}
