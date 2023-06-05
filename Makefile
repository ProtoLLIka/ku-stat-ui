.PHONY: run
run:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down

.PHONY: restart
restart:
	docker-compose down
	docker-compose up -d
	
.PHONY: restart_local
restart_local:
	docker-compose down --rmi local
	docker-compose up -d
	
.PHONY: restart_all
restart_all:
	docker-compose down --rmi all
	docker-compose up -d