import { Actor } from '../../screenplay/actor'
import { Task } from '../../screenplay/task'

export class OpenTheApp implements Task {
  async perform(actor: Actor): Promise<void> {
    await actor.stage.page.goto('/')
  }

  static now(): Task {
    return new OpenTheApp()
  }
}
