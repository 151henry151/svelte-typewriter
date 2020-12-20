import { getElements } from '@svelte-typewriter/helpers'
import type { TypewriterMainFn } from '@svelte-typewriter/types'

const typewriter: TypewriterMainFn = async (node, options) => {
	const { mode } =
		((options.loop || options.loopRandom) && (await import('./loop'))) ||
		(options.scramble && (await import('./scramble'))) ||
		(await import('./typewriter'))
	const elements = getElements(node)
	if (options.delay > 0) {
		const { sleep } = await import('../helpers')
		await sleep(options.delay)
		node.classList.remove('delay')
	}
	mode({ node, elements }, options)
}

export { typewriter }
