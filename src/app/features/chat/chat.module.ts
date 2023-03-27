import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationChatComponent } from './components/conversation-chat/conversation-chat.component';



@NgModule({
  declarations: [
    ConversationChatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConversationChatComponent
  ]
})
export class ChatModule { }
