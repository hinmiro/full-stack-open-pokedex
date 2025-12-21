import { test, describe, expect, beforeEach } from '@playwright/test'

describe('Pokedex', () => {
    test('front page can be opened', async ({ page }) => {
        await page.goto('')
        await expect(page.getByText('ivysaur')).toBeVisible()
        await expect(
            page.getByText(
                'Pokémon and Pokémon character names are trademarks of Nintendo.'
            )
        ).toBeVisible()
    })

    test('pokemon can be clicked', async ({ page }) => {
        await page.goto('/')
        const blastoiseItem = page.getByText('blastoise')
        await blastoiseItem.click()
        await page.waitForTimeout(1000)
        await expect(page.getByText('rain dish')).toBeVisible()
        await expect(page.getByText('blastoise')).toBeVisible()
    })
})
