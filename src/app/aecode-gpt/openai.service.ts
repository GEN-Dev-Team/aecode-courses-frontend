import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import OpenAI from 'openai';

interface OpenAIResponse {
  choices: {
    text: string;
    index: number;
    logprobs: any;
    finish_reason: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  http = inject(HttpClient);

  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = environment.openAIToken;

  async getResponse(prompt: string): Promise<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    };

    const response: any = await firstValueFrom(
      this.http.post(this.apiUrl, body, { headers })
    );

    return response.choices[0].message.content;
  }
}
