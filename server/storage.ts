// 현재 이 프로젝트는 정적 데이터만 사용하므로 storage가 필요하지 않습니다.
// 추후 데이터베이스 연동 시 사용할 예정입니다.

export interface IStorage {
  // 추후 필요 시 구현
}

export class MemStorage implements IStorage {
  constructor() {
    // 현재 미사용
  }
}

export const storage = new MemStorage();
