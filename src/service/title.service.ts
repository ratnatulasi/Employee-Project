import { AppDataSource } from '../utils/data-source';
import { Title } from '../entity/Title';

export class TitleService {
  private readonly titleRepository = AppDataSource.getRepository(Title);

  public getAllTitles = async (): Promise<Title[]> => {
    return await this.titleRepository.find();
  };

  //public getTitleByEmpNo = async (empNo: any): Promise<Title | null> => {
   // return await this.titleRepository.findOne({ where :{empNo:empNo}});
  //};
//
  public createTitle = async (title: Title): Promise<Title> => {
    return await this.titleRepository.save(title);
  };

  public updateTitle = async (id: string, title: Title): Promise<Title | undefined> => {
    const existingTitle = await this.titleRepository.findOneBy({ id });
    if (!existingTitle) {
      return undefined;
    }
    const updatedTitle = { ...existingTitle, ...title };
    return await this.titleRepository.save(updatedTitle);
  };

  public deleteTitle = async (id: string): Promise<Title | undefined> => {
    const existingTitle = await this.titleRepository.findOne({ where: { id } });
    if (!existingTitle) {
      return undefined;
    }
    await this.titleRepository.delete({ id });
    return existingTitle;
  };
}
