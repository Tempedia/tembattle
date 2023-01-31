import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { UserApiService } from 'src/app/service/user-api.service';

@Component({
  selector: 'app-shared-team-page',
  templateUrl: './shared-team-page.component.html',
  styleUrls: ['./shared-team-page.component.scss'],
})
export class SharedTeamPageComponent implements OnInit {
  id: string = '';
  constructor(
    private message: MessageService,
    private api: UserApiService,
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    if (this.id) {
      this.getUserTeam();
    }
  }

  loading = false;
  data: any = null;
  async getUserTeam() {
    try {
      this.loading = true;
      const r = await this.api.getUserTeam(this.id);
      this.data = r.data;
      this.title.setTitle(`${this.data.name} - Tempedia`);
      console.log(this.data);
    } catch (error) {
    } finally {
      this.loading = false;
    }
  }
}
