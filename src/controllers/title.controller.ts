import { Request, Response } from 'express';
import { TitleService } from '../service/title.service';
import { Title } from '../entity/Title';

export class TitleController {
  private readonly titleService: TitleService = new TitleService();

  public getAllTitles = async (req: Request, res: Response) => {
    const titles = await this.titleService.getAllTitles();
    res.send(titles);
  };

  public getTitleByEmpNo = async (req: Request, res: Response) => {
    const empNo = parseInt(req.params.empNo);
    //const title = await this.titleService.getTitleByEmpNo(empNo);
    const title={id:1}
    if (title) {
      res.send(title);
    } else {
      res.status(404).send('Title not found');
    }
  };

  public createTitle = async (req: Request, res: Response) => {
    const title: Title = req.body;
    const createdTitle = await this.titleService.createTitle(title);
    res.send(createdTitle);
  };

  public updateTitle = async (req: Request, res: Response) => {
    const id = req.params.id;
    const title: Title = req.body;
    const updatedTitle = await this.titleService.updateTitle(id, title);
    if (updatedTitle) {
      res.send(updatedTitle);
    } else {
      res.status(404).send('Title not found');
    }
  };

  public deleteTitle = async (req: Request, res: Response) => {
    const id = req.params.id;
    const deletedTitle = await this.titleService.deleteTitle(id);
    if (deletedTitle) {
      res.send(deletedTitle);
    } else {
      res.status(404).send('Title not found');
    }
  };
}

