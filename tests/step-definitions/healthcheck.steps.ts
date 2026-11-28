import { Given, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ScreenplayWorld } from '../screenplay/cucumber/screenplay_world'
import { setTheStageFromCucumber, theActorNamed } from '../screenplay/on_stage'
import { OpenTheApp } from '../juice/task/open_the_app'
import { HomePage } from '../juice/ui/home_page'

Given('Cesar abre Juice Shop', async function (this: ScreenplayWorld) {
  setTheStageFromCucumber(this)
  await theActorNamed('Cesar').attemptsTo(OpenTheApp.now())
})

Then('Cesar ve la tienda cargada', async function (this: ScreenplayWorld) {
  await expect(HomePage.on(this.page).APP_CONTENT).toBeVisible()
})
