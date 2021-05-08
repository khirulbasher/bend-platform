export const commonResource = {
    HOST_URL: 'http://localhost:8788',
    CONTEXT: '/api/bend-main-app',
    FICKET_CONTEXT: '/api/bend-ficket-app'
};
export const BendCoreConstants = {
    production: true,
    API_URL: commonResource.HOST_URL + commonResource.CONTEXT,
    DEBUG_ENABLE: true,
    cookies: {
        ACCOUNT_INFO: 'ACCOUNT_INFO',
        TOKEN: 'TOKEN',
        AUTHENTICATION_STATE: 'AUTHENTICATION_STATE',
        AUTHORITIES: 'AUTHORITIES',
        lifetime: {
            TOKEN_LIFETIME: 3600000,
            TOKEN_LIFETIME_FOR_REMEMBER_ME: 7200000
        },
        TOKEN_LIFETIME: 'TOKEN_LIFETIME',
        routingDatabase: {
            REGISTRY_TYPE: 'REGISTRY_TYPE',
            REGISTRY_VALUE: 'REGISTRY_VALUE',
            detectionTypes: {
                CLUSTER_KEY: 'CLUSTER_KEY',
                LOCALE_KEY: 'LOCALE_KEY'
            }
        },
        lang: {
            DEFAULT_LANG_KEY: 'DEF-LANG-KEY',
            USE_LANG_KEY: 'USE-LANG-KEY'
        }
    },
    jwt: {
        JSON_WEB_TOKEN: 'Json-Web-Token',
        REFRESHED_JSON_WEB_TOKEN: 'Refreshed-Json-Web-Token'
    },
    neighbourBaseUrls: {
        BEND_MAIN_APP: commonResource.HOST_URL + commonResource.CONTEXT,
        BEND_FICKET_APP: commonResource.HOST_URL + commonResource.FICKET_CONTEXT
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1jb3JlLWNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9lbnZpcm9ubWVudHMvYmVuZC1jb3JlLWNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUc7SUFDNUIsUUFBUSxFQUFFLHVCQUF1QjtJQUNqQyxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLGNBQWMsRUFBRSxzQkFBc0I7Q0FDdkMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9CLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLE9BQU8sRUFBRSxjQUFjLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxPQUFPO0lBQ3pELFlBQVksRUFBRyxJQUFJO0lBQ25CLE9BQU8sRUFBRTtRQUNQLFlBQVksRUFBRSxjQUFjO1FBQzVCLEtBQUssRUFBRSxPQUFPO1FBQ2Qsb0JBQW9CLEVBQUUsc0JBQXNCO1FBQzVDLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFFBQVEsRUFBRTtZQUNSLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLDhCQUE4QixFQUFFLE9BQU87U0FDeEM7UUFDRCxjQUFjLEVBQUUsZ0JBQWdCO1FBQ2hDLGVBQWUsRUFBRTtZQUNmLGFBQWEsRUFBRSxlQUFlO1lBQzlCLGNBQWMsRUFBRSxnQkFBZ0I7WUFDaEMsY0FBYyxFQUFFO2dCQUNkLFdBQVcsRUFBRSxhQUFhO2dCQUMxQixVQUFVLEVBQUUsWUFBWTthQUN6QjtTQUNGO1FBQ0QsSUFBSSxFQUFFO1lBQ0osZ0JBQWdCLEVBQUUsY0FBYztZQUNoQyxZQUFZLEVBQUUsY0FBYztTQUM3QjtLQUNGO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsY0FBYyxFQUFFLGdCQUFnQjtRQUNoQyx3QkFBd0IsRUFBRSwwQkFBMEI7S0FDckQ7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixhQUFhLEVBQUUsY0FBYyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsT0FBTztRQUMvRCxlQUFlLEVBQUUsY0FBYyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsY0FBYztLQUN6RTtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29tbW9uUmVzb3VyY2UgPSB7XHJcbiAgSE9TVF9VUkw6ICdodHRwOi8vbG9jYWxob3N0Ojg3ODgnLFxyXG4gIENPTlRFWFQ6ICcvYXBpL2JlbmQtbWFpbi1hcHAnLFxyXG4gIEZJQ0tFVF9DT05URVhUOiAnL2FwaS9iZW5kLWZpY2tldC1hcHAnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQmVuZENvcmVDb25zdGFudHMgPSB7XHJcbiAgcHJvZHVjdGlvbjogdHJ1ZSxcclxuICBBUElfVVJMOiBjb21tb25SZXNvdXJjZS5IT1NUX1VSTCArIGNvbW1vblJlc291cmNlLkNPTlRFWFQsXHJcbiAgREVCVUdfRU5BQkxFIDogdHJ1ZSxcclxuICBjb29raWVzOiB7XHJcbiAgICBBQ0NPVU5UX0lORk86ICdBQ0NPVU5UX0lORk8nLFxyXG4gICAgVE9LRU46ICdUT0tFTicsXHJcbiAgICBBVVRIRU5USUNBVElPTl9TVEFURTogJ0FVVEhFTlRJQ0FUSU9OX1NUQVRFJyxcclxuICAgIEFVVEhPUklUSUVTOiAnQVVUSE9SSVRJRVMnLFxyXG4gICAgbGlmZXRpbWU6IHtcclxuICAgICAgVE9LRU5fTElGRVRJTUU6IDM2MDAwMDAsXHJcbiAgICAgIFRPS0VOX0xJRkVUSU1FX0ZPUl9SRU1FTUJFUl9NRTogNzIwMDAwMFxyXG4gICAgfSxcclxuICAgIFRPS0VOX0xJRkVUSU1FOiAnVE9LRU5fTElGRVRJTUUnLFxyXG4gICAgcm91dGluZ0RhdGFiYXNlOiB7XHJcbiAgICAgIFJFR0lTVFJZX1RZUEU6ICdSRUdJU1RSWV9UWVBFJyxcclxuICAgICAgUkVHSVNUUllfVkFMVUU6ICdSRUdJU1RSWV9WQUxVRScsXHJcbiAgICAgIGRldGVjdGlvblR5cGVzOiB7XHJcbiAgICAgICAgQ0xVU1RFUl9LRVk6ICdDTFVTVEVSX0tFWScsXHJcbiAgICAgICAgTE9DQUxFX0tFWTogJ0xPQ0FMRV9LRVknXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsYW5nOiB7XHJcbiAgICAgIERFRkFVTFRfTEFOR19LRVk6ICdERUYtTEFORy1LRVknLFxyXG4gICAgICBVU0VfTEFOR19LRVk6ICdVU0UtTEFORy1LRVknXHJcbiAgICB9XHJcbiAgfSxcclxuICBqd3Q6IHtcclxuICAgIEpTT05fV0VCX1RPS0VOOiAnSnNvbi1XZWItVG9rZW4nLFxyXG4gICAgUkVGUkVTSEVEX0pTT05fV0VCX1RPS0VOOiAnUmVmcmVzaGVkLUpzb24tV2ViLVRva2VuJ1xyXG4gIH0sXHJcbiAgbmVpZ2hib3VyQmFzZVVybHM6IHtcclxuICAgIEJFTkRfTUFJTl9BUFA6IGNvbW1vblJlc291cmNlLkhPU1RfVVJMICsgY29tbW9uUmVzb3VyY2UuQ09OVEVYVCxcclxuICAgIEJFTkRfRklDS0VUX0FQUDogY29tbW9uUmVzb3VyY2UuSE9TVF9VUkwgKyBjb21tb25SZXNvdXJjZS5GSUNLRVRfQ09OVEVYVFxyXG4gIH1cclxufTtcclxuIl19