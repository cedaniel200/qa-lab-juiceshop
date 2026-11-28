import { Locator, Page } from 'playwright'

export class HomePage {
  readonly APP_CONTENT: Locator

  private constructor(page: Page) {
    // Si Angular no montó la aplicación, app-root queda vacío.
    this.APP_CONTENT = page.locator('app-root > *').first()
  }

  static on(page: Page): HomePage {
    return new HomePage(page)
  }
}
