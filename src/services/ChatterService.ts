import axios from 'axios';

type Participants = string[];

interface IResponse {
  _links: {
    [key: string]: string;
  };
  chatter_count: number;
  chatters: {
    broadcaster: string[];
    vips: string[];
    moderators: string[];
    staff: string[];
    admins: string[];
    global_mods: string[];
    viewers: string[];
  };
}

class ChatterService {
  public async getViewers(): Promise<Participants> {
    const response = await axios.get<IResponse>(
      'https://tmi.twitch.tv/group/user/lucas_montano/chatters'
    );

    const { viewers } = response.data.chatters;

    return viewers;
  }
}

export default new ChatterService();
