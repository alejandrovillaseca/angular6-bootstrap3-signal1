import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private _hubConnection: HubConnection;
    msgs: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this._hubConnection = new signalR.HubConnectionBuilder()
        .withUrl('http://clstgportd01/Cockpitv20/notify')
        .configureLogging(signalR.LogLevel.Trace)
        .build();
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection: ' + err.toString()));
    this._hubConnection.on('BroadcastMessage', (type: string, payload: string) => {
      // this.msgs.push({ severity: type, summary: payload });
      this.msgs.push(type, payload);
    });
  }
  Disconnect() {
    this._hubConnection
    .stop()
    .then(() => console.log('Connection closed'))
    .catch(err => console.log('Error while closing connection: ' + err.toString()));
    this.msgs = [];
  }
}

