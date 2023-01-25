// vendors
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// libs
import { IQuote } from '@violet-labs/domain';
// feature
import { QuoteEntity } from './+entity/quote.entity';

@Injectable()
export class RepositoryService {
  constructor(
    @InjectRepository(QuoteEntity)
    private repository: Repository<QuoteEntity>
  ) {}

  /**
   * Get a random quote, optionally filtered by character
   * @param characters
   * @returns IQuote
   */
  async getRandomQuote(characters?: Array<string>): Promise<IQuote> {
    const query = this.repository
      .createQueryBuilder()
      .select()
      .orderBy('RANDOM()');

    // Filter characters
    if (characters) {
      query.where('character IN(:...characters)', { characters: characters });
    }

    const entity = await query.getOne();

    if (!entity) {
      return;
    }

    const { quote, character } = entity;
    return { quote, character } as IQuote;
  }

  /**
   * Get a list of unqiue characters
   * @returns Array<string>
   */
  async getCharacters(): Promise<Array<string>> {
    const entities = await this.repository
      .createQueryBuilder()
      .select()
      .groupBy('character')
      .getMany();

    if (!entities) {
      return;
    }

    return entities.map(({ character }) => character);
  }
}
